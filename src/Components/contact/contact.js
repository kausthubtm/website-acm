
import {Container, Row, Col} from 'react-bootstrap';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import '../../Shared/CSS/contact.css'

function Contact(){
    return (
        <div className="donate_area">
            <Container>
                <Row>
                    <Col md={6}>
                        <div class="donate_content ">
                            <h2>Contact us</h2>
                        </div>
                    </Col>
                    <Col md={6}>
                        <form id="contact-form" method="post" action="https://nitk.acm.org/php/contact.php">

                            <div class="messages"></div>

                            <div class="controls">

                                <Row>
                                    <Col md={6}>
                                        <TextField id="form_name" label="Firstname" name="name" 
                                            required="required" variant="filled" size='small'
                                            classes={{
                                                'root':'text-field-root'
                                            }}/>
                                    </Col>
                                    <Col md={6}>
                                        <TextField id="form_lastname" label="LastName" name="surname" 
                                            required="required" variant="filled" size='small'
                                            classes={{
                                                'root':'text-field-root'
                                            }}/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={12}>
                                        <TextField id="form_email" type="email" name="email" label="Email Address" required="required" variant="filled"  size='small'
                                            classes={{
                                                'root':'text-field-root'
                                            }}/>
                                    </Col>
                                </Row>
                                
                                <Row>
                                    <Col md={12}>

                                        <TextField
                                        id="form_message"
                                        label="Message"
                                        multiline
                                        rows={4}
                                        cols={1000}
                                        fullWidth
                                        required="required"
                                        name="message"
                                         size='small'
                                         variant="filled"
                                            classes={{
                                                'root':'text-field-root'
                                            }}/>

                                    </Col>
                                </Row>
                                
                                <Button type="submit" value="Send" variant="contained" color="primary"classes={{
                                                'root':'button-root'
                                            }}>
                                    Send
                                </Button>
                                <Button type="reset" value="Clear" variant="contained" color="primary" classes={{
                                                'root':'button-root'
                                            }}>
                                    Clear
                                </Button>
                
                                        
                                <div id="msgSubmit" class="h3 text-center hidden"></div>
                                <Row>
                                    <Col md={12}>
                                        <p class="text-muted">
                                            <strong>*</strong> These fields are required.</p>
                                    </Col>
                                </Row>
                            </div>

                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;