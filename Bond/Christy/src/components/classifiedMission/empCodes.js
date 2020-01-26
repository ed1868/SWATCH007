import axios from "axios";

class empDecoder {
  constructor() {
    this.service = axios.create({
      baseURL: `http://localhost:3005/auth`,
      withCredentials: true
    });
  }

  signup = user => {
    const formData = new FormData();
    Object.keys(user).forEach(key => formData.append(key, user[key]));
    console.log(user);

    return this.service
      .post("/signup", formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      })
      .then(response => response.data);
  };

  empDecoder = credentials => {
    console.log('PAYLOAD FROM FRONT END IN SERVICE',credentials);

    return axios.
      get("http://localhost:3005/auth/decoder")
      .then(response => {
        console.log(response.data)
      })
      .catch(err => {
        if (err) {
          console.log(err);
        }
      });
  };
}

export default empDecoder;
