import React from "react";
import { Card } from "react-bootstrap";
const UserList = ({ data }) => {
  return (
    <div className="userList">
      {data.map((user) => {
        return (
          <div>
            <div className="userCard">
              <Card style={{ width: "18rem" }}>
                <Card.Img
                  className="img"
                  variant="top"
                  width="70px"
                  src="/user.png"
                />
                <Card.Body>
                  <Card.Title>
                    <h4 className="cardName">{user.name}</h4>
                  </Card.Title>
                  <Card.Text className="cardText">
                    {/* <h5>
                      <span>username :</span> {user.username}
                    </h5> */}
                    <h6>
                      <span>Address :</span> {user.address.street},
                      {user.address.suite}, {user.address.city}
                    </h6>
                    <h6>
                      <span>Current Location :</span> {user.address.geo.lat},
                    </h6>
                    <h6>
                      <span>Phone :</span> {user.phone}
                    </h6>
                    <h6>
                      <span>Website :</span> {user.website}
                    </h6>
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
