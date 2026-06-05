const LAYANAN = ['SKA', 'CAK', 'TNM', 'PDA']; 

function validasiForm() { 
    const namalengkap = document.getElementById('namalengkap').value.trim();
    const nim = document.getElementById('nim').value.trim(); 
    
    const layanan = document.getElementById('layanan').value.trim(); 
    const tanggal = document.getElementById('tanggal').value.trim();
    const keterangan = document.getElementById('keterangan').value.trim(); 

    if(namalengkap === '' || nim === '' || prodi === '' || layanan === '' || tanggal === '' || keterangan === '') { 
        alert('❌ Semua field harus diisi!'); 
        return false;
    
}
}
