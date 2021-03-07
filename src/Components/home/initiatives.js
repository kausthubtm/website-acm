import React from 'react';
import '../../Shared/CSS/home2.css';
import '../../Shared/CSS/home/about.css'


function Initiatives () {
    return(
                <div className="home_space1">
                        <div className="row">
                            <div className="col-12 col-md-12">
                                <h3 className="initiatives_heading">Initiatives<br></br>
                                <img src={"/uploads/sigs/underline.png"} alt='acm logo' height='25' width='350'/></h3>
                                <h6 className="initiatives">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor tristique nibh 
                                faucibus porta. Cras dignissim enim eu orci pharetra, nec aliquam nisl tincidunt. Nullam commodo risus in varius 
                                scelerisque. Nulla facilisi. Ut at euismod magna. Morbi a dui vitae arcu dapibus imperdiet. Etiam laoreet ut odio 
                                eget efficitur. Nam in maximus odio. Donec non mauris non tortor viverra consectetur vitae non sem. In vehicula a 
                                nibh id convallis. Curabitur vehicula porttitor commodo. Nulla vel congue nulla.</h6> 
                            </div>   
                        </div>
                    </div>
    );
}

export default Initiatives;