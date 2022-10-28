 function transaksi(buku, diskon, pajak, stok, pesanan){
     let result = 0;
     for (let loopIndex = 0; loopIndex <= pesanan; loopIndex++) {
         if (buku && buku.harga && (loopIndex < stok)) {
             const judul = buku.judul;
             const harga = buku.harga;
             const totaldiskon = harga * (diskon / 100);
             const hargapotongdiskon = harga - totaldiskon;
             const totalpajak = hargapotongdiskon * (pajak / 100);
             const hargatambahpajak = hargapotongdiskon + totalpajak;
             result += hargatambahpajak;

             console.group();
             console.log('Judul Buku = ',judul,'*',loopIndex+1)
             console.log('Harga', harga);
             console.log('Diskon', totaldiskon);
             console.log('Harga dipotong diskon', hargapotongdiskon);
             console.log('Pajak', totalpajak);
             console.log('Harga ditambah pajak', hargatambahpajak)
             console.log()
             console.groupEnd();
         } else {
             console.log('Stok buku',buku.judul,'habis','kurang',pesanan-stok);
             console.log();
             break;
         }
     }

}

transaksi({judul: "One Piece", harga:5000000, publicity: true}, 30, 3, 3, 4);
transaksi({judul: "Naruto", harga:1000000, publicity: false}, 40, 2, 3, 3);
transaksi({judul: "Bleach", harga:1500000, publicity: true}, 45, 3, 3, 1);