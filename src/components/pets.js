import React, { useEffect, useState } from "react";
import DoneIcon from '@mui/icons-material/Done';
import CloseIcon from '@mui/icons-material/Close';
import { useParams } from "react-router";
import styled from 'styled-components';
import DetailCard from "./DetailCard";
import Navbar from './navbar';
import { motion } from "framer-motion"



export default function (props) {
  const Img = styled.img`
  max-height:90%;
  max-width:90%;
  display:block;
  border-radius:15px;
  margin-top:-10px
  `
  const Heading = styled.p`
  font-weight:bold;
  font-family:Arial;
  font-size:25px;
  color:#2f4f4f
  `

  const Columnitems = styled.p`
  line-height:2.5em;
  font-family:Arial;
  font-size:19px
  `
  useEffect(() => {
    getdata();
  }, []);

  // const [searchParams, setSearchParams] = useSearchParams();
  // searchParams.get("idl")
  let { id } = useParams();
  const [items, setItems] = useState([]);

  const getdata = async () => {
    const response = await fetch(`http://localhost:5000/pets/${id}`);
    const data = await response.json();

    setItems(data);
    console.log(data);
  };

  return (
    <>
  <Navbar  class1="colorChange" class2="colorChange" c1="black" c2="black"/>
  <motion.div initial={{opacity:0}} animate={{opacity:1}} exit={{opacity:0}}>


    <div style={{background:"#F8F8FF"}}>
    <div style={{padding:"50px"}}>
      {items.map((item) => {
        return (
          <div>
            {/* <div className="container mt-5">
              <div className="card shadow">
                <div className="container p-5">
                  <div className="card-title text-center" style={{fontFamily:'Arial'}}><h2><b>Adopt {item.name}</b></h2></div>
                  <div className="card-body pt-5">
                    <div className="row">
                     <Heading>About Me</Heading>
                     
                      <div className="col-4" >
                      <Columnitems> <b>Name :</b> {item.name} <br />
                        <b>Age :</b> {item.age} years<br /> 
                        <b>Breed :</b> {item.breed} <br /> 
                        </Columnitems>
                      </div>
                     
                     
                      <div className="col-4" >
                      <Columnitems>
                      <b>Gender :</b> {item.gender} <br />
                        <b>Neutered :</b> No<br /> 
                        <b>vaccinated :</b> Yes <br />
                        </Columnitems>
                      </div>
                      <div className="col-4">
                        <Img src={item.url} alt="Error" ></Img>
                      </div>
                    </div><hr/>
                    <div className="row mt-3">
                    <Heading>Info</Heading>
                     <div className="col-4" >
                       <Columnitems>
                    <DoneIcon color="success"/>Shots Up to Date<br/>
                   <DoneIcon color="success"/> Good with Dogs<br/>
                    </Columnitems>
                      </div>
                      <div className="col-4" >
                        <Columnitems>
                     <DoneIcon color="success"/> Needs Loving Adopter<br/>
                     <DoneIcon color="success"/> Good with Kids<br/>
                     </Columnitems>
                      </div>
                      <div className="col-4" >
                        <Columnitems>
                       
                     <CloseIcon color="error"/> Not Spayed<br/>
    
                     <CloseIcon color="error"/> Not Good with Cats<br/>
                     </Columnitems>
                      </div>
                      </div><hr/>
                      <Heading>Additional Info</Heading>
                    <p style={{fontFamily:"Arial", fontSize:"19px"}}>{item.description} </p><hr/>

                    <Heading>Reason</Heading>
                    <p style={{fontFamily:"Arial", fontSize:"19px"}}>Shifting to elsewhere</p><br/>
                    <div className="text-center">
                    <div className="btn btn-primary p-2" style={{borderRadius:"5px"}}> Contact Me!</div>
                  </div>
                  </div>
                </div>
              </div>
            </div> */}

            <DetailCard id={item._id} name={item.name} age={item.age} breed={item.breed} gender={item.gender} url={item.url} description={item.description} owner={item.owner} city={item.city} contact={props.contact} reason={item.reason} characterstics={[item.characteristics]} vaccinated={item.vaccinated}  />
          </div>
        );
      })}
    </div></div>
    </motion.div>
    </>
  );
}
