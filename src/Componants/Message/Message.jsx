import axios from 'axios';
import React, { useContext, useEffect } from 'react'
import { FilterProducts } from '../../Context/FilterProducts';

export default function Message() {
    let { userData, setMessages, messages } = useContext(FilterProducts)
    async function fetchMessages() {
        try {
            const { data } = await axios.get(
                `https://zunis-node-js.vercel.app/message/messageUser/${userData._id}`
            );
            setMessages(data.messages);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchMessages()
    }, [messages.length])
    console.log(messages);
    return <>
        <div>
            <div className="container-message  container ">

                <section className="page-message   messages">
                    <h1 className='p-5'>MESSAGE</h1>
                    <div className="banner mx-md-4">
                        {messages?.length > 0 ? (
                            messages.map((element) => {
                                return (
                                    <div className="card" key={element._id}>
                                        <div className="details">
                                            <p>
                                                From: <span>Admin</span>
                                            </p>
                                            <p>
                                                contact US: <span>01208073209</span>
                                            </p>
                                            <p>
                                                Message: <span>{element.body}</span>
                                            </p>

                                        </div>
                                    </div>
                                );
                            })
                        ) :
                            <h1 className='p-5'>No Messages!</h1>
                        }
                    </div>
                </section>
            </div>

        </div>    </>
}
