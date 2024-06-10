Express plays a vital role in the MERN stack by providing a secure, efficient, and scalable way to handle HTTP requests, enforce business logic, manage data validation and sanitization, and act as an intermediary between the frontend and MongoDB. Direct communication between the frontend and MongoDB would bypass these critical functionalities, leading to potential security risks, inefficiencies, and maintenance challenges.

const app = express(); // Express is a function which returns an object app. app has props like app.get ... defined in the express obj.

JWT
For Login browser send req to server . Server sends a JWT if authenticated.By the presence or absence of this token on the browser we know that wheter the user is authenticated or not respectively.

Header(Algorithm Used) , Payload(Non sensitive user Data) , Signature(Generated at server by hashing header and payload. Its Values changes when we change payload or header.)


