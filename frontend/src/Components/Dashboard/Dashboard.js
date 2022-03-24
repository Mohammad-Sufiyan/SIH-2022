import React from 'react';
import SideNavigationBar from './SideNavigationBar';
import './Dashboard.css';
import QRCodeGenerator from './QRCodeGenerator/QRCodeGenerator';
import {Form, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

import './Dashboard.css';

const Sidebar = () => {
  //   const [select, setSelect] = useState(1);
  //   const user_data = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('userData');
    navigate('/');
  };

  return (
    <>
      <div className='main'>
        <SideNavigationBar />

        <div className='container '>
          <div className='row flex_class_one'>
            <div className='col section_one'>
              <div class='p-4'>
                <div class='border border-gray-100 p-6 rounded-lg shadow-md bg-white'>
                  <QRCodeGenerator />
                </div>
              </div>
            </div>
            <div className='col section_one'>
              <div class='p-4 '>
                <div class='border border-gray-100 p-6 rounded-lg min-h-full shadow-md sub_section_one bg-white'>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5'>
                    Name: Khushbu Parmar
                  </h2>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5'>
                    Date Of Birth: 25-01-2001
                  </h2>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5 '>
                    Aadhaar Number: 1234 5678 9101
                  </h2>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5 '>
                    Email ID: khushbu@xyz.com
                  </h2>
                  <h2 class='text-lg text-gray-900 font-medium title-font mb-5 '>
                    Phone Number: 9864723990
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <Form>
            <section class='text-gray-600 body-font'>
              <div class='container px-5 mx-auto'>
                <div class='flex flex-wrap -m-4'>
                  <div class='p-4 lg:w-1/3'>
                    <div class='h-full px-8 pt-10 rounded-lg overflow-hidden text-center relative'>
                      <Form.Group
                        className='mb-3'
                        controlId='formPlaintextPassword'
                      >
                        <Form.Label className='upload_text'>
                          Insurance
                        </Form.Label>
                        <Col sm='10'>
                          <Form.Control type='file' placeholder='Password' />
                        </Col>
                        <span class="upload_plus_button shadow-md">+</span>
                      </Form.Group>
                    </div>
                  </div>
                  <div class='p-4 lg:w-1/3'>
                    <div class='h-full px-8 pt-10 rounded-lg overflow-hidden text-center relative'>
                      <Form.Group
                        className='mb-3'
                        controlId='formPlaintextPassword'
                      >
                        <Form.Label className='upload_text'>PUC</Form.Label>
                        <Col sm='10'>
                          <Form.Control type='file' placeholder='Password' />
                        </Col>
                        <span class="upload_plus_button shadow-md">+</span>
                      </Form.Group>
                    </div>
                  </div>
                  <div class='p-4 lg:w-1/3'>
                    <div class='h-full px-8 pt-10 rounded-lg overflow-hidden text-center relative'>
                      <Form.Group
                        className='mb-3'
                        controlId='formPlaintextPassword'
                      >
                        <Form.Label className='upload_text'>
                          Registeration Certificate
                        </Form.Label>
                        <Col sm='10'>
                          <Form.Control type='file' placeholder='Password' />
                        </Col>
                        <span class="upload_plus_button shadow-md">+</span>
                      </Form.Group>
                    </div>
                  </div>
                </div>
              </div>
            </section>
            <div class="p-2 w-full">
              <button class="flex mx-auto mt-10 text-white border-0 py-2 px-8 focus:outline-none text-lg dashborad_activate_btn">Activate</button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
