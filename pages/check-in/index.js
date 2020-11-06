import React from 'react'
import Styled from '@emotion/styled'
import { loadFirebase } from '../../lib/db'
    
const CheckIn = () => {
    return (
        <Wrapper>
            <form action="">
                <select name="planet" id="" onChange={(e) => changeCard(e)}>
                    <option disabled selected value="invalid">PILIH TEAM</option>
                    <option value="merkurius">MERKURIUS</option>
                    <option value="venus">VENUS</option>
                    <option value="mars">MARS</option>
                    <option value="jupiter">JUPITER</option>
                    <option value="saturnus">SATURNUS</option>
                    <option value="uranus">URANUS</option>
                    <option value="neptunus">NEPTUNUS</option>
                    <option value="pluto">PLUTO</option>
                </select>
                <input type="text" name="singkatanPlanet"/><br/>
                <input type="text" name="roket"/><br/>
                <textarea name="deskripsi" id="" cols="30" rows="10"></textarea><br/>
                <input type="text" name="room"/>
            </form>
        </Wrapper>
    );
}

CheckIn.getInitialProps = async () => {
    let firebase = await loadFirebase()
    let db = firebase.firestore()
    let result = await new Promise((resolve, reject) => { 
        db.collection('teamdata').get()
            .then(snapshot => {
                let data = []
                snapshot.forEach(doc => {
                    data.push(Object.assign({
                        id: doc.id
                    }, doc.data()))
                })
                console.log(data);
                resolve(data)
            })
            .catch(error => {
                reject([])
            })
    })
    console.log("result");
    console.log(result);
    return result
}
    
const Wrapper = Styled.div`
    width: 100%;
    height: 100%;
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    p{
        font-family: 'Exo2-med';
        font-size: 24px;
        margin: 0;
    }
`
    
export default CheckIn