//menampilkan data
let murid = [
    { nama_depan: "Jack", nama_belakang: "Ma" },
    { nama_depan: "Johnny", nama_belakang: "English" },
    { nama_depan: "John", nama_belakang: "Cena" }
]

murid.map(
    (murid, index) => {
        console.log(murid.nama_depan + " " + murid.nama_belakang);
    }
)
