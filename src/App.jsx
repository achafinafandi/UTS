import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    namaLengkap: '',
    tanggalLahir: '',
    jenisKelamin: '',
    kelas: '',
    alamat: '',
    namaOrangTua: '',
    pekerjaanOrangTua: '',
    noTeleponOrangTua: '',
    programKursus: '',
    hariKursus: [],
    waktuKursus: [],
  });

  const [alert, setAlert] = useState({
    type: '',
    message: '',
    visible: false,
  });

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    
    if (type === 'checkbox') {
      setFormData((prevData) => ({
        ...prevData,
        [name]: checked
          ? [...prevData[name], value]
          : prevData[name].filter((v) => v !== value),
      }));
    } else {
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (!formData.namaLengkap || !formData.tanggalLahir) {
      setAlert({
        type: 'danger',
        message: 'Nama lengkap dan tanggal lahir wajib diisi!',
        visible: true,
      });
      return;
    }

    setAlert({
      type: 'success',
      message: 'Pendaftaran berhasil!',
      visible: true,
    });

    console.log(formData);
  };

  return (
    <div className="registration-form-container">
      <div className="card p-4 shadow">
        <h2 className="text-center mb-4 text-primary">Formulir Pendaftaran</h2>

        {alert.visible && (
          <div className={`alert alert-${alert.type}`} role="alert">
            {alert.message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="namaLengkap">Nama Lengkap:</label>
            <input
              type="text"
              id="namaLengkap"
              name="namaLengkap"
              className="form-control"
              value={formData.namaLengkap}
              onChange={handleChange}
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div className="form-group">
            <label htmlFor="tanggalLahir">Tanggal Lahir:</label>
            <input
              type="date"
              id="tanggalLahir"
              name="tanggalLahir"
              className="form-control"
              value={formData.tanggalLahir}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="jenisKelamin">Jenis Kelamin:</label>
            <select
              id="jenisKelamin"
              name="jenisKelamin"
              className="form-control"
              value={formData.jenisKelamin}
              onChange={handleChange}
            >
              <option value="">Pilih jenis kelamin</option>
              <option value="Laki-laki">Laki-laki</option>
              <option value="Perempuan">Perempuan</option>
              <option value="Lainnya">Lainnya</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="kelas">Kelas:</label>
            <input
              type="text"
              id="kelas"
              name="kelas"
              className="form-control"
              value={formData.kelas}
              onChange={handleChange}
              placeholder="Masukkan kelas"
            />
          </div>

          <div className="form-group">
            <label htmlFor="alamat">Alamat:</label>
            <input
              type="text"
              id="alamat"
              name="alamat"
              className="form-control"
              value={formData.alamat}
              onChange={handleChange}
              placeholder="Masukkan alamat"
            />
          </div>

          <div className="form-group">
            <label htmlFor="namaOrangTua">Nama Orang Tua:</label>
            <input
              type="text"
              id="namaOrangTua"
              name="namaOrangTua"
              className="form-control"
              value={formData.namaOrangTua}
              onChange={handleChange}
              placeholder="Masukkan nama orang tua"
            />
          </div>

          <div className="form-group">
            <label htmlFor="pekerjaanOrangTua">Pekerjaan Orang Tua:</label>
            <input
              type="text"
              id="pekerjaanOrangTua"
              name="pekerjaanOrangTua"
              className="form-control"
              value={formData.pekerjaanOrangTua}
              onChange={handleChange}
              placeholder="Masukkan pekerjaan orang tua"
            />
          </div>

          <div className="form-group">
            <label htmlFor="noTeleponOrangTua">No. Telepon Orang Tua:</label>
            <input
              type="text"
              id="noTeleponOrangTua"
              name="noTeleponOrangTua"
              className="form-control"
              value={formData.noTeleponOrangTua}
              onChange={handleChange}
              placeholder="Masukkan no. telepon orang tua"
            />
          </div>

          <div className="form-group">
            <label htmlFor="programKursus">Program Kursus:</label>
            <input
              type="text"
              id="programKursus"
              name="programKursus"
              className="form-control"
              value={formData.programKursus}
              onChange={handleChange}
              placeholder="Masukkan program kursus"
            />
          </div>

          <div className="form-group">
            <label>Hari Kursus:</label><br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="seninKamis"
                name="hariKursus"
                value="Senin & Kamis"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="seninKamis">Senin & Kamis</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="selasaJumat"
                name="hariKursus"
                value="Selasa & Jumat"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="selasaJumat">Selasa & Jumat</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="rabuSabtu"
                name="hariKursus"
                value="Rabu & Sabtu"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="rabuSabtu">Rabu & Sabtu</label>
            </div>
          </div>

          <div className="form-group">
            <label>Waktu Kursus:</label><br />
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="jam1"
                name="waktuKursus"
                value="14:00 - 15:30"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="jam1">14:00 - 15:30</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="jam2"
                name="waktuKursus"
                value="16:00 - 17:30"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="jam2">16:00 - 17:30</label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="checkbox"
                id="jam3"
                name="waktuKursus"
                value="19:00 - 20:30"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="jam3">19:00 - 20:30</label>
            </div>
          </div>

          <button class="container" type="submit" className="btn btn-primary btn-block mt-3">
            Daftar
          </button>
        </form>
      </div>
    </div>
  );
}

export default RegistrationForm;
