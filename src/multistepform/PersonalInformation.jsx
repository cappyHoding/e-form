import { forwardRef } from "react";

const PersonalInformation = forwardRef(( props, ref ) => {
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-10 order-md-1">
                <h4 className="mb-3">Data Pribadi</h4>
                <form className="needs-validation" noValidate>
                    {/* Full Name */}
                    <div className="mb-3">
                        <label htmlFor="fullName">Nama Lengkap</label>
                        <input
                            className="form-control input-control"
                            id="fullName"
                            type="text"
                            placeholder="Nama Lengkap"
                            onChange={props.handleChange('fullName')}
                            value={props.values.fullName}
                            required
                        />
                    </div>

                    {/* Id Number */}
                    <div className="mb-3">
                        <label htmlFor="idNumber">Nomor KTP</label>
                        <input
                            className="form-control input-control"
                            id="idNumber"
                            type="text"
                            placeholder="Nomor KTP"
                            onChange={props.handleChange('idNumber')}
                            value={props.values.idNumber}
                            required
                        />
                    </div>

                    {/*  gender  */}
                    <div className="mb-3">
                        <label htmlFor="gender">Jenis Kelamin</label>
                        <select className="form-select d-block w-100 input-control"
                                id="gender"
                                value={props.values.gender}
                                onChange={props.handleChange('gender')}
                                required
                        >
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>

                    <div className="row">
                        <div className="col-md-6 mb-3">
                            {/* POB */}
                            <div className="mb-3">
                                <label htmlFor="pob">Tempat Lahir</label>
                                <input
                                    className="form-control input-control"
                                    id="pob"
                                    type="text"
                                    placeholder="Tempat Lahir"
                                    onChange={props.handleChange('pob')}
                                    value={props.values.pob}
                                    required
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mb-3">
                            {/* DOB */}
                            <div className="mb-3">
                                <label htmlFor="dob">Tanggal Lahir</label>
                                <input
                                    className="form-control input-control"
                                    id="pob"
                                    type="date"
                                    placeholder="Tanggal Lahir"
                                    onChange={props.handleChange('dob')}
                                    value={props.values.dob}
                                    required
                                />
                            </div>
                        </div>
                    </div>

                    {/* Address */}
                    <div className="mb-3">
                        <label htmlFor="address">Alamat</label>
                        <input
                            className="form-control input-control"
                            id="address"
                            type="text"
                            placeholder="Alamat Sesuai KTP"
                            onChange={props.handleChange('address')}
                            value={props.values.address}
                            required
                        />
                    </div>

                    <div className="row">
                        {/* phone Number */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="phoneNumber">Nomor Handphone</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text input-prepend">+62</span>
                                </div>
                                <input
                                    className="form-control input-control"
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Nomor Handphone"
                                    onChange={props.handleChange('phoneNumber')}
                                    value={props.values.phoneNumber}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                className="form-control input-control"
                                id="email"
                                type="email"
                                placeholder="Email"
                                onChange={props.handleChange('email')}
                                value={props.values.email}
                                required
                            />
                        </div>
                    </div>

                    {/*  Occupation  */}
                    <div className="mb-3">
                        <label htmlFor="occupation">Pekerjaan</label>
                        <select className="form-select d-block w-100 input-control"
                                id="occupation"
                                value={props.values.occupation}
                                onChange={props.handleChange('occupation')}
                                required
                        >
                            <option value="Pegawai Negeri">Pegawai Negeri</option>
                            <option value="Pegawai Swasta">Pegawai Swasta</option>
                            <option value="Ibu Rumah Tangga">Ibu Rumah Tangga</option>
                            <option value="Belum Bekerja">Belum Bekerja</option>
                            <option value="Siswa / Mahasiswa">Siswa / Mahasiswa</option>
                        </select>
                    </div>

                    {/* Mother Name */}
                    <div className="mb-3">
                        <label htmlFor="motherName">Nama Ibu Kandung</label>
                        <input
                            className="form-control input-control"
                            id="motherName"
                            type="text"
                            placeholder="Nama Ibu Kandung"
                            onChange={props.handleChange('motherName')}
                            value={props.values.motherName}
                            required
                        />
                    </div>
                </form>
            </div>
        </div>
    )
})

export default PersonalInformation