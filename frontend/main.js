let getItems = async () => {
  // With Fetch
  // let responseFetch = await fetch("http://localhost:1337/api/items");
  // let data = await response.json();
  // console.log("fetch", responseFetch);
  // console.log(data);

  //With Axios

  let response = await axios.get("http://localhost:1337/api/items");

  console.log(response);
};

document.querySelector("#get").addEventListener("click", getItems);

// --------- POST ----------

let addItem = async () => {
  //With Fetch
  // let response = await fetch("http://localhost:1337/api/items", {
  //   //config
  //   method: "POST",
  //   body: JSON.stringify({
  //     data: {
  //       name: "Mikrofon",
  //       price: 80,
  //     },
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // let data = await response.json();
  // console.log(response, data);

  //With Axios

  let response = await axios.post("http://localhost:1337/api/items", {
    //request body
    data: {
      price: 45,
      name: "Äpple",
    },
  });
  console.log(response);
};

document.querySelector("#post").addEventListener("click", addItem);

// ---------- PUT ----------

let editItem = async () => {
  //Fetch
  // let response = await fetch("http://localhost:1337/api/items/5", {
  //   //config
  //   method: "PUT",
  //   body: JSON.stringify({
  //     data: {
  //       price: 40,
  //     },
  //   }),
  //   headers: {
  //     "Content-Type": "application/json",
  //     "Authorization": `Bearer ${sessionStorage.getItem("token")}`
  //   },
  // });
  // let data = await response.json();
  // console.log("Edited data", response, data);
  //Axios
  let response = await axios.put(
    `http://localhost:1337/api/items/7`,
    {
      data: {
        price: 100,
      },
    },
    {
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjgwNTk2NDc5LCJleHAiOjE2ODMxODg0Nzl9.MLz5csmQq6moK0CzJtAgLZQ3n-nhHGEC17AuW_Syzoc`,
      },
    }
  );
  console.log("Authorized: Edited data", response);
};

document.querySelector("#put").addEventListener("click", editItem);

// --------- DELETE ----------

let deleteItem = async (id) => {
  //Fetch

  // let response = await fetch("http://localhost:1337/api/items/5", {
  //   method: "DELETE",
  // });
  let data = await response.json();
  console.log("response/data", response, data);

  //Axios
  let response = await axios.delete(`http://localhost:1337/api/items/5`);
  console.log("Deleted data", response);
};

document.querySelector("#delete").addEventListener("click", deleteItem);
