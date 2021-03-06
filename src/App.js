import React from 'react';
import './App.css';
import IdCard from './components/IdCard';
import Greetings from './components/Greetings';
import Random from './components/Random';
import BoxColor from './components/BoxColor';
import CreditCard from './components/CreditCard';
import Rating from './components/Rating';
import DriverCard from './components/DriverCard';
import LikeButton from './components/LikeButton';
import ClickablePicture from './components/ClickablePicture';
import Dice from './components/Dice';
import Carousel from './components/Carousel';
import NumbersTable from './components/NumbersTable';
import Facebook from './components/Facebook';
function App() {
  return (
    <div className="App">

           
            {/* Iteration 1 | Component: IdCard */}
            <h4>Component: IdCard</h4>

            <IdCard 
            lastName='Doe'
            firstName='John'
            gender='male'
            height={178}
            birth={new Date("1992-07-14")}
            picture="https://randomuser.me/api/portraits/men/44.jpg"
            />

            <IdCard 
            lastName='Delores '
            firstName='Obrien'
            gender='female'
            height={172}
            birth={new Date("1993-05-11")}
            picture="https://randomuser.me/api/portraits/women/8.jpg"
            />


            {/* Iteration 2 | Component: Greetings */}
            <h4>Component: Greetings</h4>

            <Greetings lang="de">Ludwig</Greetings>
            <Greetings lang="fr">François</Greetings>

            {/* Iteration 3 | Component: Random */}
            <h4>Component: Random</h4>

            <Random min={1} max={6}/>
            <Random min={1} max={100}/>


            {/* Iteration 4 | Component: BoxColor */}
            <h4>Component: BoxColor</h4>
            
            <BoxColor r={255} g={0} b={0} />
            <BoxColor r={128} g={255} b={0} />


            {/* Iteration 5 | Component: CreditCard */}
            <h4>Component: CreditCard</h4>

            <div className="creditCards-box">
            <CreditCard
            type="Visa"
            number="0123456789018845"
            expirationMonth={3}
            expirationYear={2021}
            bank="BNP"
            owner="Maxence Bouret"
            bgColor="#11aa99"
            color="white" />
            <CreditCard
            type="Master Card"
            number="0123456789010995"
            expirationMonth={3}
            expirationYear={2021}
            bank="N26"
            owner="Maxence Bouret"
            bgColor="#eeeeee"
            color="#222222" />
           <CreditCard
            type="Visa"
            number="0123456789016984"
            expirationMonth={12}
            expirationYear={2019}
            bank="Name of the Bank"
            owner="Firstname Lastname"
            bgColor="#ddbb55"
            color="white" />
            </div>

            {/* Iteration 6 | Component: `Rating`  */}
            <h4>Component: Rating</h4>

            <Rating>0</Rating>
            <Rating>1.49</Rating>
            <Rating>1.5</Rating>
            <Rating>3</Rating>
            <Rating>4</Rating>
            <Rating>5</Rating>
            

            {/* Iteration 7 | Component: `DriverCard */}
            <h4>Component: DriverCard</h4>
            
            <DriverCard
              name="Travis Kalanick"
              rating={4.2}
              img="https://si.wsj.net/public/resources/images/BN-TY647_37gql_OR_20170621052140.jpg?width=620&height=428"
              car={{
                model: "Toyota Corolla Altis",
                licensePlate: "CO42DE"
              }} />
            <DriverCard
              name="Dara Khosrowshahi"
              rating={4.9}
              img="https://ubernewsroomapi.10upcdn.com/wp-content/uploads/2017/09/Dara_ELT_Newsroom_1000px.jpg"
              car={{
                model: "Audi A3",
                licensePlate: "BE33ER"
              }} />


            {/* Iteration 8 | State: LikeButton */}
            <h4>Iteration 8 | State: LikeButton</h4>

            <LikeButton/>


            {/* Iteration 9: State: ClickablePicture */}
            <h4>Iteration 9: State: ClickablePicture</h4>
            <ClickablePicture
              img='/img/persons/maxence-glasses.png'
              imgClicked='/img/persons/maxence.png'
            />


            {/* Iteration 10 | State: Dice */}
            <h4>Iteration 10 | State: Dice</h4>

            <Dice/>


            {/* Iteration 11 | State: Carousel */}
            <h4>Iteration 11 | State: Carousel</h4>
            
            <Carousel 
              imgs={[
              'https://randomuser.me/api/portraits/women/1.jpg',
              'https://randomuser.me/api/portraits/men/1.jpg',
              'https://randomuser.me/api/portraits/women/2.jpg',
              'https://randomuser.me/api/portraits/men/2.jpg'
               ]}
            />


            {/* Iteration 12 | List and Keys | NumbersTable */}
            <h4>Iteration 12 | List and Keys | NumbersTable</h4>
            <NumbersTable limit={12} />


            {/* Iteration 13 | List and Keys - FaceBook */}
            <h4>Iteration 13 | List and Keys - FaceBook</h4>

            <Facebook />

    </div>
  );
}

export default App;
