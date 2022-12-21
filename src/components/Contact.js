import React from 'react';
import styled from 'styled-components';

const Contact = () => {
    return (
        <Wrapper>
            <h2 className="common-heading">Contact page</h2>

            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.816156010847!2d91.86517548848579!3d24.904251833123773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37505528778cc6c9%3A0x256f687c62e3a119!2sRadium%20Engineering%20and%20University%20Admission%20Coaching!5e0!3m2!1sen!2sbd!4v1671623264600!5m2!1sen!2sbd"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>

            <div className="container">
                <div className="contact-form">
                    <form action="https://formspree.io/f/xqkozlbz"
                        method='POST'
                        className='contact-inputs'
                    >
                        <input
                            type="text"
                            name="username"
                            placeholder='username'
                            required
                            autoComplete='off'
                        // value=""
                        />
                        <input
                            type="email"
                            name="Email"
                            placeholder='Enter'
                            required
                            autoComplete='off'
                        // value="" 

                        />
                        <textarea
                            name='Message'
                            cols="30"
                            rows="10"
                            required
                            autoComplete='off'
                            placeholder='Enter your message'
                        ></textarea>

                        <input type="submit" value="send" />
                    </form>
                </div>
            </div>
        </Wrapper>
    );
}

const Wrapper = styled.section`
    padding: 9rem 0 5rem 0;
    text-align: center;
    .container {
      margin-top: 6rem;
      .contact-form {
        max-width: 50rem;
        margin: auto;
        .contact-inputs {
          display: flex;
          flex-direction: column;
          gap: 3rem;
          input[type="submit"] {
            cursor: pointer;
            transition: all 0.2s;
            &:hover {
              background-color: ${({ theme }) => theme.colors.white};
              border: 1px solid ${({ theme }) => theme.colors.btn};
              color: ${({ theme }) => theme.colors.btn};
              transform: scale(0.9);
            }
          }
        }
      }
    }
  `;

export default Contact;
