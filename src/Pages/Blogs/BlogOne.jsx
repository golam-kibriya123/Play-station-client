import logo from '../../assets/logo.png'
import { useContext, useEffect } from "react";
import { AuthContext } from "../../Providers/AuthProvider";
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..

const BlogOne = () => {

    const { setTitle } = useContext(AuthContext);
    useEffect(() => {
        setTitle("| Blogs")
    });
    useEffect(() => {
        AOS.init();
    }, [])
    return (
        <div>
            <div className='flex  h-12 mx-auto justify-center my-5'>
                <img src={logo} alt="" className='border-2 border-[#209CEE]' />
                <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Daily Blogs</h1>
            </div>
            <div className="mx-10 p-2 border space-y-10">

                <div id="tokens" className="border-b pb-5">
                    <div className='flex  h-12 mx-auto justify-center mb-5'>
                        <p className="h-full text-[#209CEE] text-2xl border-2 border-[#209CEE] font-bold p-1">To</p>
                        <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>ken</h1>
                    </div>

                    <div>
                        <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>What is an access token and refresh token?</h1>
                        <h1 className=" text-2xl font-bold text-[#209CEE] cursor-pointer hover:underline ">Access token </h1>
                        <p>An access token is a credential that is issued by an authentication server (such as an OAuth server) to an application after successful authentication and authorization. It represents the authorization granted to the application to access specific resources or perform certain actions on behalf of the user. The access token is usually a string of characters that the application includes in each request to the protected resource server. It serves as proof of authentication and permission, allowing the application to access the protected resources for a limited period of time.</p>
                    </div>
                    <div >

                        <h1 className=" text-2xl font-bold text-[#209CEE] cursor-pointer hover:underline ">Refresh Token </h1>
                        <p>A refresh token is a credential that is also issued by the authentication server along with the access token. While the access token has a limited lifespan, the refresh token is typically long-lived and used to obtain a new access token once the previous one expires. The application can use the refresh token to make a request to the authentication server, asking for a fresh access token without requiring the user to re-authenticate. This process is known as token refreshing or token rotation. Refresh tokens are important for security because they limit the lifespan of access tokens and provide a way to revoke access without the user is involvement.</p>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="200">
                        <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>How do they work and where should we store them on the client-side?</h1>
                        <div>
                            <h1 className=" text-2xl font-bold text-[#209CEE] cursor-pointer hover:underline ">Obtaining Access and Refresh Tokens:</h1>
                            <p>The client application initiates the authentication process by sending a request to the authentication server (e.g., using OAuth).
                                After successful authentication and authorization, the authentication server issues an access token and a refresh token to the client application.
                                The access token is typically short-lived, while the refresh token has a longer expiration time.</p>
                        </div>
                        <div>
                            <h1 className=" text-2xl font-bold text-[#209CEE] cursor-pointer hover:underline ">Storing Access and Refresh Tokens:</h1>
                            <p> <b>Access Token:</b> The access token is usually stored on the client-side, commonly in memory or a secure storage mechanism such as a session or local storage. Storing it in memory is more secure as it is less prone to client-side attacks, but it may require re-authentication if the page is refreshed.</p>
                            <p> <b>  Refresh Token:</b> The refresh token needs to be stored securely to prevent unauthorized access. It should never be accessible to client-side JavaScript or other client-side code. A common practice is to store it in an HTTP-only secure cookie or a secure storage mechanism provided by the platform .
                            </p>
                        </div>
                    </div>
                </div>






                <div id="database" className="border-b pb-5" data-aos="fade-up" data-aos-duration="1000">
                    <div className='flex  h-12 mx-auto justify-center mb-5'>
                        <p className="h-full text-[#209CEE] text-2xl border-2 border-[#209CEE] font-bold p-1">SQL and NoSQL</p>
                        <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'> databases</h1>
                    </div>
                    <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Compare SQL and NoSQL databases?</h1>
                    <div>
                        <h1 className=" text-2xl font-bold text-[#209CEE] cursor-pointer hover:underline ">SQL  </h1>
                        <p>SQL databases follow a structured data model based on tables with predefined schemas. They use a fixed schema where data is organized into rows and columns.SQL databases use the SQL query language for defining and manipulating data. SQL provides a standardized way to interact with databases using declarative queries. SQL databases are generally vertically scalable, meaning they can handle increased loads by upgrading the hardware  of a single server. They may also support limited horizontal scaling through replication and sharding techniques.SQL databases are commonly used for applications that require complex queries, transactions, and strong data consistency. They are suitable for structured data and well-defined schemas, such as financial systems, e-commerce platforms, and relational data.</p>
                    </div>
                    <div>
                        <h1 className=" text-2xl font-bold text-[#209CEE] cursor-pointer hover:underline ">NoSQL</h1>
                        <p>NoSQL databases employ various data models such as key-value, document, columnar, or graph. They provide more flexible schemas and allow for dynamic and unstructured data.NoSQL databases have their query languages specific to the chosen data model. Each NoSQL database may have its own query language or API for data retrieval and manipulation. NoSQL databases are designed to be horizontally scalable, allowing for distributed architectures across multiple servers. They can handle large amounts of data and high traffic loads by adding more commodity servers to the cluster. NoSQL databases excel in handling large volumes of rapidly changing, unstructured, or semi-structured data. They are favored in scenarios like real-time analytics, content management, social networks, IoT applications, and scenarios requiring high scalability.</p>
                    </div>
                </div>

                <div id="JavaScript" className="border-b pb-5" data-aos="fade-up" data-aos-duration="1000">
                    <div className='flex  h-12 mx-auto justify-center mb-5'>
                        <p className="h-full text-[#209CEE] text-2xl border-2 border-[#209CEE] font-bold p-1">JavaScript</p>
                        <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>Frameworks</h1>
                    </div>
                    <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>What is express js? What is Nest JS?</h1>
                    <div>
                        <h1 className=" text-2xl font-bold text-[#209CEE] cursor-pointer hover:underline ">Express.js </h1>
                        <p>Express.js is a minimalist web application framework for Node.js. It provides a simple and unopinionated approach to building web servers and APIs. Express.js offers a set of lightweight middleware and routing mechanisms that allow developers to handle HTTP requests and responses efficiently. It provides flexibility, giving developers the freedom to structure their application as they see fit.</p>
                    </div>
                    <div>
                        <h1 className=" text-2xl font-bold text-[#209CEE] cursor-pointer hover:underline ">Nest.js </h1>
                        <p>Nest.js is a TypeScript-based, opinionated framework for building scalable and maintainable server-side applications. It is built on top of Express.js and leverages concepts from other frameworks like Angular to provide a structured and modular approach to application development. Nest.js emphasizes the use of decorators, dependency injection, and modules to organize code and promote best practices.</p>
                    </div>
                </div>


                <div id="tokens" data-aos="fade-up" data-aos-duration="1000">
                    <div className='flex  h-12 mx-auto justify-center mb-5'>
                        <p className="h-full text-[#209CEE] text-2xl border-2 border-[#209CEE] font-bold p-1">Mongo</p>
                        <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>DB</h1>
                    </div>
                    <h1 className='h-full text-white text-2xl bg-[#209CEE] font-bold p-1'>What is MongoDB aggregate and how does it work ?</h1>
                    <div>

                        <p>In MongoDB, the aggregate operation is a powerful feature that allows us to perform advanced data aggregation tasks on collections. It provides a way to process and transform data using a pipeline of stages, where each stage performs a specific operation on the data.The aggregate operation takes an array of pipeline stages as input and processes the documents in the collection sequentially through those stages. Each stage defines an operation or transformation to be applied to the data, and the result of each stage becomes the input for the next stage in the pipeline. MongoDB provides a rich set of aggregation operators that can be used within each stage of the pipeline to perform operations on the data. Aggregation operators enable a wide range of computations, including arithmetic calculations, grouping, filtering, sorting, joining, and array operations. Some commonly used operators include $sum, $avg, $min, $max, $project, $match, $group, $sort, $lookup, $unwind, and many more.</p>
                    </div>

                </div>

            </div>

        </div>
    );
};

export default BlogOne;