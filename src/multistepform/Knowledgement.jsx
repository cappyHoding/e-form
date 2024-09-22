import {forwardRef} from "react";

const Knowledgement = forwardRef((props, ref) => {
    return (
        <div className="row justify-content-md-center">
            <div className="py-5 text-center">
                <h2>Syarat dan Ketentuan</h2>
                <hr/>
            </div>
            <div className="col-md-10 order-md-1">
                <ol className="list-group list-group-numbered">
                    <l1 className="list-group-item">Aplikasi Pembukaan Rekening secara Elektronik (e-Form) merupakan layanan BPR Perdana untuk mempermudah Nasabah/Calon Nasabah melakukan permohonan pembukaan rekening.</l1>
                    <l1 className="list-group-item">Nasabah/Calon Nasabah wajib membaca dan memahami informasi produk yang ditampilkan pada website e-Form sebelum mengajukan permohonan pembukaan rekening.</l1>
                    <l1 className="list-group-item">Pada Website e-form, Nasabah/Calon Nasabah akan diminta melampirkan foto KTP dan foto selfie.</l1>
                    <l1 className="list-group-item">Atas pertimbangan tertentu, BPR Perdana berhak untuk menolak permohonan pembukaan rekening yang diajukan oleh Nasabah/Calon Nasabah.</l1>
                    <l1 className="list-group-item">Nasabah/Calon nasabah dapat menyampaikan pengaduannya ke BPR Perdana terkait dengan produk/layanan ini. Apabila penyelesaian pengaduan tidak dapat diterima dengan baik dan berpotensi menjadi perselisihan atau sengketa, maka penyelesaian selanjutnya dapat dilakukan melalui  pengadilan atau diluar pengadilan melalui Lembaga Alternatif Penyelesai Sengketa (LAPS).</l1>
                    <l1 className="list-group-item">Untuk keterangan lebih lanjut mengenai pembukaan rekening di BPR Perdana, silakan hubungi BPR Perdana (021)8720479</l1>
                </ol>

                <div className="row">
                    <span>Nasabah/Calon Nasabah dengan ini menyatakan telah membaca, mengerti dan memahami sepenuhnya informasi produk yang akan dibuka dan bersedia tunduk pada :</span>
                </div>
                <div className="row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox"
                               id="tc1" onChange={props.handleChange('tc1')}
                               checked={props.values.tc1}
                        />
                        <label className="form-label-check" htmlFor="tc1">
                            1. Syarat dan Ketentuan Aplikasi Pembukaan Rekening Mandiri e-Form
                        </label>
                    </div>
                </div>
                <div className="row">
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" id="tc2" onChange={props.handleChange('tc2')}
                               checked={props.values.tc2}/>
                        <label className="form-label-check" htmlFor="tc2">
                            2. Syarat umum pembukaan rekening serta ketentuan dan syarat khusus rekening tabungan
                        </label>
                    </div>
                </div>
            </div>
        </div>
    )
})

export default Knowledgement