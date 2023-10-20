import React from 'react';

function CheckoutForm() {
    return (
        <div className="site-section">
            <div className="container">
                <div className="row mb-5">
                    <div className="col-md-12">
                        <div className="border p-4 rounded" role="alert">
                            ¿Ya tienes cuenta? <a href="/">Ingresa acá</a> a tu sesión.
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-6 mb-5 mb-md-0">
                        <h2 className="h3 mb-3 text-black">Detalles de Facturación</h2>
                        <div className="p-3 p-lg-5 border">
                            <div className="form-group">
                                <label htmlFor="c_country" className="text-black">País <span className="text-danger">*</span></label>
                                <select id="c_country" className="form-control" placeholder='Seleccionar País'>
                                    <option value="2">Argentina</option>
                                    <option value="3">Bolivia</option>
                                    <option value="4">Brasil</option>
                                    <option value="5">Chile</option>
                                    <option value="6">Colombia</option>
                                    <option value="7">Ecuador</option>
                                    <option value="8">Perú</option>
                                    <option value="9">Paraguay</option>
                                    <option value="9">Uruguay</option>
                                    <option value="9">Venezuela</option>
                                    <option value="10">Otro...</option>
                                </select>
                            </div>
                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="c_fname" className="text-black">Nombre <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_fname" name="c_fname" placeholder='Nombre' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="c_lname" className="text-black">Apellido <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_lname" name="c_lname" placeholder='Apellido' />
                                </div>
                            </div>

                            <div className="form-group row">
                                <div className="col-md-12">
                                    <label htmlFor="c_address" className="text-black">Dirección <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Calle" />
                                </div>
                            </div>

                            <div className="form-group">
                                <input type="text" className="form-control" placeholder="Número" />
                            </div>

                            <div className="form-group row">
                                <div className="col-md-6">
                                    <label htmlFor="c_state_country" className="text-black"> Ciudad / Estado <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_state_country" name="c_state_country" placeholder='Ciudad / Estado' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="c_postal_zip" className="text-black">Código Postal <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_postal_zip" name="Código Postal" placeholder='Código Postal' />
                                </div>
                            </div>

                            <div className="form-group row mb-5">
                                <div className="col-md-6">
                                    <label htmlFor="c_email_address" className="text-black">Email <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_email_address" name="c_email_address" placeholder='Email' />
                                </div>
                                <div className="col-md-6">
                                    <label htmlFor="c_phone" className="text-black">Teléfono <span className="text-danger">*</span></label>
                                    <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Teléfono" />
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="c_create_account" className="text-black" data-toggle="collapse" href="#create_an_account" role="button" aria-expanded="false" aria-controls="create_an_account"><input type="checkbox" value="1" id="c_create_account" /> ¿Quieres crear una cuenta?</label>
                                <div className="collapse" id="create_an_account">
                                    <div className="py-2">
                                        {/* <p className="mb-3">¡REGISTRATE!</p> */}
                                        <div className="form-group">
                                            <label htmlFor="c_account_password" className="text-black">Ingresa contraseña</label>
                                            <input type="email" className="form-control" id="c_account_password" name="c_account_password" placeholder="" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="c_ship_different_address" className="text-black" data-toggle="collapse" href="#ship_different_address" role="button" aria-expanded="false" aria-controls="ship_different_address"><input type="checkbox" value="1" id="c_ship_different_address" /> ¿Necesitas enviarlo a otra dirección?</label>
                                <div className="collapse" id="ship_different_address">
                                    <div className="py-2">

                                        <div className="form-group">
                                            <label htmlFor="c_diff_country" className="text-black"> País <span className="text-danger">*</span></label>
                                            <select id="c_diff_country" className="form-control" placeholder='Seleccionar País'>
                                                <option value="1">Argentina</option>
                                                <option value="3">Bolivia</option>
                                                <option value="4">Brasil</option>
                                                <option value="5">Chile</option>
                                                <option value="6">Colombia</option>
                                                <option value="7">Ecuador</option>
                                                <option value="8">Perú</option>
                                                <option value="9">Paraguay</option>
                                                <option value="9">Uruguay</option>
                                                <option value="9">Venezuela</option>
                                                <option value="10">Otro...</option>
                                            </select>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_fname" className="text-black">Nombre <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_fname" name="c_fname" placeholder='Nombre' />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_lname" className="text-black">Apellido <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_lname" name="c_lname" placeholder='Apellido' />
                                            </div>
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-12">
                                                <label htmlFor="c_address" className="text-black">Dirección <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_address" name="c_address" placeholder="Calle" />
                                            </div>
                                        </div>

                                        <div className="form-group">
                                            <input type="text" className="form-control" placeholder="Número" />
                                        </div>

                                        <div className="form-group row">
                                            <div className="col-md-6">
                                                <label htmlFor="c_state_country" className="text-black"> Ciudad / Estado <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_state_country" name="c_state_country" placeholder='Ciudad / Estado' />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_postal_zip" className="text-black">Código Postal <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_postal_zip" name="Código Postal" placeholder='Código Postal' />
                                            </div>
                                        </div>

                                        <div className="form-group row mb-5">
                                            <div className="col-md-6">
                                                <label htmlFor="c_email_address" className="text-black">Email <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_email_address" name="c_email_address" placeholder='Email' />
                                            </div>
                                            <div className="col-md-6">
                                                <label htmlFor="c_phone" className="text-black">Teléfono <span className="text-danger">*</span></label>
                                                <input type="text" className="form-control" id="c_phone" name="c_phone" placeholder="Teléfono" />
                                            </div>
                                        </div>

                                    </div>

                                </div>
                            </div>

                            <div className="form-group">
                                <label htmlFor="c_order_notes" className="text-black">Comentario</label>
                                <textarea name="c_order_notes" id="c_order_notes" cols="30" rows="5" className="form-control" placeholder="Ingresa tu comentario acá..."></textarea>
                            </div>

                        </div>
                    </div>
                    <div className="col-md-6">

                        {/* <div className="row mb-5">
                            <div className="col-md-12">
                                <h2 className="h3 mb-3 text-black">Coupon Code</h2>
                                <div className="p-3 p-lg-5 border">

                                    <label htmlFor="c_code" className="text-black mb-3">Enter your coupon code if you have one</label>
                                    <div className="input-group w-75">
                                        <input type="text" className="form-control" id="c_code" placeholder="Coupon Code" aria-label="Coupon Code" aria-describedby="button-addon2" />
                                        <div className="input-group-append">
                                            <button className="btn btn-primary btn-sm px-4" type="button" id="button-addon2">Apply</button>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div> */}

                        <div className="row mb-5">
                            <div className="col-md-12">
                                <h2 className="h3 mb-3 text-black">Tu compra</h2>
                                <div className="p-3 p-lg-5 border">
                                    <table className="table site-block-order-table mb-5">
                                        <thead>
                                            <th>Producto</th>
                                            <th>Total</th>
                                        </thead>
                                        <tbody>
                                            <tr>
                                                <td>Top Up T-Shirt <strong className="mx-2">x</strong> 1</td>
                                                <td>$250.00</td>
                                            </tr>
                                            <tr>
                                                <td>Polo Shirt <strong className="mx-2">x</strong>   1</td>
                                                <td>$100.00</td>
                                            </tr>
                                            <tr>
                                                <td className="text-black font-weight-bold"><strong>Subtotal</strong></td>
                                                <td className="text-black">$350.00</td>
                                            </tr>
                                            <tr>
                                                <td className="text-black font-weight-bold"><strong>Total a Pagar</strong></td>
                                                <td className="text-black font-weight-bold"><strong>$350.00</strong></td>
                                            </tr>
                                        </tbody>
                                    </table>

                                    <div className="border p-3">
                                        <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsebank" role="button" aria-expanded="false" aria-controls="collapsebank">Transferencia Bancaria</a></h3>

                                        <div className="collapse" id="collapsebank">
                                            <div className="py-2">
                                                <p className="mb-0">Realice su pago directamente en nuestra cuenta bancaria. Utilice su ID de pedido como referencia de pago. Su pedido no se enviará hasta que los fondos se hayan liquidado en nuestra cuenta.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border p-3">
                                        <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsecheque" role="button" aria-expanded="false" aria-controls="collapsecheque">Pago con Checke</a></h3>

                                        <div className="collapse" id="collapsecheque">
                                            <div className="py-2">
                                                <p className="mb-0">Realice su pago directamente en nuestra cuenta bancaria. Utilice su ID de pedido como referencia de pago. Su pedido no se enviará hasta que los fondos se hayan liquidado en nuestra cuenta.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="border p-3">
                                        <h3 className="h6 mb-0"><a className="d-block" data-toggle="collapse" href="#collapsepaypal" role="button" aria-expanded="false" aria-controls="collapsepaypal">Paypal</a></h3>

                                        <div className="collapse" id="collapsepaypal">
                                            <div className="py-2">
                                                <p className="mb-0">Realice su pago directamente en nuestra cuenta bancaria. Utilice su ID de pedido como referencia de pago. Su pedido no se enviará hasta que los fondos se hayan liquidado en nuestra cuenta.</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="form-group mt-4">
                                        <button className="btn btn-primary btn-lg btn-block" onClick={() => window.location = 'thankyou.html'}>Realizar Pedido</button>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default CheckoutForm;
