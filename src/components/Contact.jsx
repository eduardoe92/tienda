import React from 'react';

export const ContactForm = () => {
    
    return (
        <div className="site-section">
            <div className="container">
                <div className="row">
                <div className="title-section mb-5 col-12">
                        <h2 className="text-uppercase">Contáctanos</h2>
                    </div>
                    <div className="col-md-7">
                        <form action="#" method="post">
                            <div className="p-3 p-lg-5 border">
                                <div className="form-group row">
                                    <div className="col-md-6">
                                        <label htmlFor="c_fname" className="text-black">Nombre <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="c_fname" name="c_fname" placeholder='Nombre'/>
                                    </div>
                                    <div className="col-md-6">
                                        <label htmlFor="c_lname" className="text-black">Apellido <span className="text-danger">*</span></label>
                                        <input type="text" className="form-control" id="c_lname" name="c_lname" placeholder='Apellido'/>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_email" className="text-black">Email <span className="text-danger">*</span></label>
                                        <input type="email" className="form-control" id="c_email" name="c_email" placeholder="Email" />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_subject" className="text-black">Asunto </label>
                                        <input type="text" className="form-control" id="c_asunto" name="c_asunto" placeholder='Asunto' />
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-md-12">
                                        <label htmlFor="c_message" className="text-black">Mensaje </label>
                                        <textarea name="c_message" id="c_message" cols="30" rows="7" className="form-control" placeholder='Escribe acá tu mensaje'></textarea>
                                    </div>
                                </div>
                                <div className="form-group row">
                                    <div className="col-lg-12">
                                        <input type="submit" className="btn btn-primary btn-lg btn-block" value="Enviar Mensaje" />
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5 ml-auto">
                        <div className="p-4 border mb-3">
                            <span className="d-block text-primary h6 text-uppercase">New York</span>
                            <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className="p-4 border mb-3">
                            <span className="d-block text-primary h6 text-uppercase">London</span>
                            <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                        <div className="p-4 border mb-3">
                            <span className="d-block text-primary h6 text-uppercase">Canada</span>
                            <p className="mb-0">203 Fake St. Mountain View, San Francisco, California, USA</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
