function DaftarModel({id,avatar,email,namaDepan,namaBelakang}) {
  let obj = {};
  obj.id = id;
  obj.avatar = avatar;
  obj.email = email;
  obj.namaDepan = namaDepan;
  obj.namaBelakang = namaBelakang;
  return obj;
}

export default DaftarModel;