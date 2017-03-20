import { call, put } from 'redux-saga/effects'
import LocationActions from '../Redux/LocationRedux'

/*export function * getLocation (action) {
  navigator.geolocation.getCurrentPosition(
     (position) => {
       const { longitude, latitude } = position;
       LocationActions.locationSuccess(
         longitude, latitude, formatted = 'onetwothre'
       )
     },
     (error) => LocationActions.locationFailure(error),
     {enableHighAccuracy: true, timeout: 45000, maximumAge: 1000}
   )
}*/


export function * getLocation (action) {
}
