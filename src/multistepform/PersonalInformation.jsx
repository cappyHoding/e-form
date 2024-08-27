const PersonalInformation = ({prevStep, nextStep, handleChange, values}) => {
    // const Continue = e => {
    //     e.preventDefault()
    //     nextStep()
    // }
    // const Previous = e => {
    //     e.preventDefault()
    //     prevStep()
    // }

    return (
        <div className="row justify-content-md-center">
            <div className="col-md-10 order-md-1">
                <h4 className="mb-3">Data Pribadi</h4>
                <form className="needs-validation" noValidate>
                    {/* Full Name */}
                    <div className="mb-3">
                        <label htmlFor="fullName">Nama Lengkap</label>
                        <input
                            className="form-control"
                            id="fullName"
                            type="text"
                            placeholder="Nama Lengkap"
                            onChange={handleChange('fullName')}
                            // value={values.fullName}
                            required
                        />
                    </div>

                    {/* Id Number */}
                    <div className="mb-3">
                        <label htmlFor="idNumber">Nomor KTP</label>
                        <input
                            className="form-control"
                            id="idNumber"
                            type="text"
                            placeholder="Nomor KTP"
                            onChange={handleChange('idNumber')}
                            // value={values.idNumber}
                            required
                        />
                    </div>

                    {/*  gender  */}
                    <div className="mb-3">
                        <label htmlFor="gender">Jenis Kelamin</label>
                        <select className="form-select d-block w-100"
                                id="gender"
                                // value={values.gender}
                                onChange={handleChange('fullName')}
                                required
                        >
                            <option value="Laki-Laki">Laki-Laki</option>
                            <option value="Perempuan">Perempuan</option>
                        </select>
                    </div>

                    {/* POB */}
                    <div className="mb-3">
                        <label htmlFor="pob">Tempat Lahir</label>
                        <input
                            className="form-control"
                            id="pob"
                            type="text"
                            placeholder="Tempat Lahir"
                            onChange={handleChange('pob')}
                            // value={values.idNumber}
                            required
                        />
                    </div>

                    {/* DOB */}
                    <div className="mb-3">
                        <label htmlFor="dob">Tanggal Lahir</label>
                        <input
                            className="form-control"
                            id="pob"
                            type="date"
                            placeholder="Tanggal Lahir"
                            onChange={handleChange('dob')}
                            // value={values.idNumber}
                            required
                        />
                    </div>

                    <div className="row">
                        {/* phone Number */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="phoneNumber">Nomor Handphone</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">+62</span>
                                </div>
                                <input
                                    className="form-control"
                                    id="phoneNumber"
                                    type="text"
                                    placeholder="Nomor Handphone"
                                    onChange={handleChange('phoneNumber')}
                                    // value={values.idNumber}
                                    required
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="col-md-6 mb-3">
                            <label htmlFor="email">Email</label>
                            <input
                                className="form-control"
                                id="email"
                                type="email"
                                placeholder="Email"
                                onChange={handleChange('email')}
                                // value={values.idNumber}
                                required
                            />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default PersonalInformation