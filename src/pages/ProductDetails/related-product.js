import React from 'react'

class RelatedProduct extends React.Component {
    render() {
        return (
            <div>
                <div className="row d-flex justify-content-center wow fadeIn">

                    <div className="col-md-6 text-center">

                        <h4 className="my-4 h4">Additional information</h4>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus suscipit modi sapiente illo soluta odit
                            voluptates,
quibusdam officia. Neque quibusdam quas a quis porro? Molestias illo neque eum in laborum.</p>

                    </div>

                </div>

                <div className="row wow fadeIn">

                    <div className="col-lg-4 col-md-12 mb-4">

                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/11.jpg" className="img-fluid" alt="" />

                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">

                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/12.jpg" className="img-fluid" alt="" />

                    </div>

                    <div className="col-lg-4 col-md-6 mb-4">

                        <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Products/13.jpg" className="img-fluid" alt="" />

                    </div>

                </div>
            </div>
        )
    };
}

export default RelatedProduct;
