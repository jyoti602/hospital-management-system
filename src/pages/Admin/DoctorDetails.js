import React, { useEffect, useState } from 'react';
// import axios from 'axios';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import TableComponent from '../../components/Table/TableComponent';
import './DoctorDetails.css';
import { FaPlus, FaEdit, FaTrash, FaSearch, FaFilter } from 'react-icons/fa';
import { addDoctor, deleteDoctor, getdoctor, updateDoctor } from '../../api/authService';
import DoctorFormModal from './DoctorFormModal';

// ✅ Yup Validation Schema
const doctorSchema = Yup.object().shape({
  name: Yup.string().required('Full name is required'),
  gender: Yup.string().required('Gender is required'),
  phone: Yup.string()
    .matches(/^\d{10}$/, 'Phone number must be 10 digits')
    .required('Phone is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  specialization: Yup.string().required('Specialization is required'),
  qualification: Yup.string().required('Qualification is required'),
  experience: Yup.string().required('Experience is required'),
  consultationFee: Yup.string().required('Fee is required'),
  address: Yup.string().required('Address is required'),
});

const DoctorDetails = () => {
  const [doctors, setDoctors] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedSpecialization, setSelectedSpecialization] = useState('');
  const [filterDate, setFilterDate] = useState('');
  const [showDoctorModal, setShowDoctorModal] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [successMessage, setSuccessMessage] = useState('');
  const [defaultValues, setDefaultValues] = useState({});


  const {
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(doctorSchema),
  });

  useEffect(() => {
    fetchDoctors();
  }, []);

  const fetchDoctors = async () => {
    try {
      const res = await getdoctor();
      setDoctors(res.data);
    } catch (err) {
      console.error('Fetch error:', err);
    }
  };

  const toggleModal = () => {
    setShowDoctorModal(!showDoctorModal);
    setEditIndex(null);
    reset();
    setSuccessMessage('');
  };

  const onSubmit = async (data) => {
    try {
      if (editIndex !== null) {
        const id = doctors[editIndex].id;
        const response = await updateDoctor(id, data);
        
        setSuccessMessage(response.data.message);


      } else {
        const response = await addDoctor(data);
        setSuccessMessage(response.data.message);
      }
      fetchDoctors();
      toggleModal();
    } catch (err) {
      console.error('Submit error:', err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteDoctor(id);
      fetchDoctors();
    } catch (err) {
      console.error('Delete error:', err);
    }
  };
const handleEdit = (index) => {
  const doctor = doctors[index];
  setDefaultValues({
    name: doctor.full_name,
    gender: doctor.gender,
    phone: doctor.phone_number,
    email: doctor.email,
    specialization: doctor.specialization,
    qualification: doctor.qualification,
    experience: doctor.experience,
    consultationFee: doctor.consultation_fee,
    address: doctor.address,
  });
  setEditIndex(index);
  setShowDoctorModal(true);
  setSuccessMessage('');
};

  const filteredDoctors = doctors.filter((doc) => {
    const term = searchTerm.toLowerCase();
    const matchesSearch =
      doc.full_name?.toLowerCase().includes(term) ||
      doc.specialization?.toLowerCase().includes(term) ||
      doc.email?.toLowerCase().includes(term) ||
      doc.phone_number?.toLowerCase().includes(term);

    const matchesSpecialization = selectedSpecialization
      ? doc.specialization === selectedSpecialization
      : true;

    const matchesDate = filterDate
      ? doc.created_at?.slice(0, 10) === filterDate
      : true;

    return matchesSearch && matchesSpecialization && matchesDate;
  });

  const columns = [
    { label: 'Name', key: 'full_name' },
    { label: 'Gender', key: 'gender' },
    { label: 'Phone', key: 'phone_number' },
    { label: 'Email', key: 'email' },
    { label: 'Specialization', key: 'specialization' },
    { label: 'Qualification', key: 'qualification' },
    { label: 'Experience', key: 'experience' },
    { label: 'Fee', key: 'consultation_fee' },
    { label: 'Address', key: 'address' },
    { label: 'Actions', key: 'actions' },
  ];

  const dataWithActions = filteredDoctors.map((doc, index) => ({
    ...doc,
    actions: (
      <div className="action-btns">
        <button className="edit-btn" onClick={() => handleEdit(index)}>
          <FaEdit />
        </button>
        <button className="delete-btn" onClick={() => handleDelete(doc.id)}>
          <FaTrash />
        </button>
      </div>
    ),
  }));

  return (
    <div className="doctor-page">
      <div className="header">
        <h2>Doctor Details</h2>
        <button className="add-btn" onClick={toggleModal}>
          <FaPlus /> Add Doctor
        </button>
      </div>

      <div className="toolbar">
        <div className="search-box">
          <FaSearch className="icon" />
          <input
            type="text"
            placeholder="Search by Name, Specialization, Email or Phone"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="filter-box">
          <FaFilter className="icon" />
          <select
            value={selectedSpecialization}
            onChange={(e) => setSelectedSpecialization(e.target.value)}
          >
            <option value="">All Specializations</option>
            <option value="Cardiologist">Cardiologist</option>
            <option value="Dermatologist">Dermatologist</option>
            <option value="Neurologist">Neurologist</option>
            <option value="Orthopedic">Orthopedic</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Radiologist">Radiologist</option>
            <option value="ENT Specialist">ENT Specialist</option>
          </select>
        </div>
      </div>

      <div className="table-wrapper">
        <TableComponent columns={columns} data={dataWithActions} rowsPerPage={5} />
      </div>

      {showDoctorModal && (
      <DoctorFormModal
        onClose={toggleModal}
        onSubmit={onSubmit}
        editIndex={editIndex}
        defaultValues={defaultValues}
        doctorSchema={doctorSchema}
        successMessage={successMessage}
      />
    )}

    </div>
  );
};

export default DoctorDetails;
