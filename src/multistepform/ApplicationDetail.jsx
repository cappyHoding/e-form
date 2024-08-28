import {forwardRef} from "react";

const ApplicationDetail = forwardRef((props) => {
    return (
        <div className="row justify-content-md-center">
            <div className="col-md-10 order-md-1">
                <h4 className="mb-3">Detail Pembukaan Tabungan</h4>
                <form className="needs-validation" noValidate>
                    {/*  Saldo Tabungan  */}
                    <div className="mb-3">
                        <label htmlFor="nominal">Nominal Tabungan</label>
                        <div className="input-group">
                            <div className="input-group-prepend">
                                <span className="input-group-text input-prepend">Rp</span>
                            </div>
                            <input
                                className="form-control input-control"
                                id="nominal"
                                type="number"
                                placeholder="Nominal Tabungan"
                                onChange={props.handleChange('nominal')}
                                value={props.values.nominal}
                                required
                            />
                        </div>
                    </div>

                    {/* Product Types */}
                    <div className="mb-3">
                        <label htmlFor="productTypes">Jenis Tabungan</label>
                        <select
                            className="form-control d-block w-100 input-control round"
                            id="productTypes"
                            value={props.values.productTypes}
                            onChange={props.handleChange('productTypes')}
                            required
                        >
                            <option value="Tabungan Perdana">Tabungan Perdana</option>
                            <option value="Tabungan Perdana Plus">Tabungan Perdana Plus</option>
                            <option value="Tabungan Nusantara">Tabungan Nusantara</option>
                            <option value="TabunganKu">Tabungan Perdana</option>
                            <option value="Tabungan Hari Raya">Tabungan Hari Raya</option>
                            <option value="Simpanan Pelajar">Simpanan Pelajar</option>
                        </select>
                    </div>
                </form>
            </div>
        </div>
    )
})

export default ApplicationDetail