import React from 'react'
import UserData from '../pages/userdata/models/UserDataModel'
import CallApi from '../services/request-helper'
import Endpoint from '../services/endpoint'

const BASE_API = process.env.REACT_APP_BASE_API;

const getDataUser = async ({ index }) => {
  const url = BASE_API + Endpoint.userData + "?page=" + index;
  const response = await CallApi({ url, method:"GET" });
  return response.data.data;
}


const UserDataRepository = {
  getDataUser,

}

export default UserDataRepository