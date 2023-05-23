'use client';

const NoCita = () => {
    return (
        <div className="p-5">
            <h2>Mis Citas</h2>
            <hr></hr>
            <div>
                <div>
                    Actualmente no tiene citas de asesoría reservadas.
                </div>
                <div>
                    <button type="button" className="btn btn-success">
                        Programar una cita
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoCita;