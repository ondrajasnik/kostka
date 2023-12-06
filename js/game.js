var penezenka = 1000;
    var typ; 
    var cislo; 

    function aktualizovatStavPeněženky() {
        document.getElementById('peněženka').textContent = penezenka;
        if (penezenka <= 0) {
            document.getElementById('restartButton').style.display = 'block';
        } else {
            document.getElementById('restartButton').style.display = 'none';
        }
    }

    function sazkaLiche() {
        var vsazeno = parseInt(document.getElementById('vsazeno').value);
        if (isNaN(vsazeno) || vsazeno <= 0 || vsazeno > penezenka) {
            document.getElementById('result').innerHTML = 'Neplatná částka!';
            return;
        }
        typ = 'liche'; 
        vsazit(vsazeno);
    }

    function sazkaSude() {
        var vsazeno = parseInt(document.getElementById('vsazeno').value);
        if (isNaN(vsazeno) || vsazeno <= 0 || vsazeno > penezenka) {
            document.getElementById('result').innerHTML = 'Neplatná částka!';
            return;
        }
        typ = 'sude'; 
        vsazit(vsazeno);
    }

    function sazkaCislo() {
        var vsazeno = parseInt(document.getElementById('vsazeno').value);
        if (isNaN(vsazeno) || vsazeno <= 0 || vsazeno > penezenka) {
            document.getElementById('result').innerHTML = 'Neplatná částka!';
            return;
        }
        cislo = parseInt(prompt('Zadej číslo (1-6):'));
        if (isNaN(cislo) || cislo < 1 || cislo > 6) {
            document.getElementById('result').innerHTML = 'Neplatné číslo!';
            return;
        }
        typ = 'cislo'; 
        vsazit(vsazeno);
    }

    function vsazit(vsazeno) {
        switch (typ) {
            case 'liche':
                document.getElementById('result').innerHTML = 'Sázíte na liché číslo.';
                break;
            case 'sude':
                document.getElementById('result').innerHTML = 'Sázíte na sudé číslo.';
                break;
            case 'cislo':
                document.getElementById('result').innerHTML = 'Sázíte na číslo ' + cislo + '.';
                break;
        }
    }

    function hod() {
        var vsazeno = parseInt(document.getElementById('vsazeno').value);
        if (isNaN(vsazeno) || vsazeno <= 0 || vsazeno > penezenka) {
            document.getElementById('result').innerHTML = 'Neplatná částka!';
            return;
        }

        var h = Math.ceil(Math.random() * 6);
        document.getElementById('cube').src='img/kostka' + h + '.png';
    document.getElementById('result').innerHTML = '<p>Hod: ' + h + '</p>';

       
        var vyhra = false;
        switch (typ) {
            case 'liche':
                vyhra = (h % 2 !== 0);
                break;
            case 'sude':
                vyhra = (h % 2 === 0);
                break;
            case 'cislo':
                vyhra = (h === cislo);
                break;
        }

        if (vyhra) {
            if (typ === 'liche' || typ === 'sude') {
                penezenka += vsazeno;
                document.getElementById('result').innerHTML += '<br>Vyhráli jste! Získali jste ' + (vsazeno * 2) + '.';
            } else {
                penezenka += vsazeno * 3;
                document.getElementById('result').innerHTML += '<br>Vyhráli jste! Získali jste ' + (vsazeno * 3) + '.';
            }
        } else {
            penezenka -= vsazeno;
            document.getElementById('result').innerHTML += '<br>Prohráli jste. Ztratili jste ' + vsazeno + '.';
        }

        
        aktualizovatStavPeněženky();

     
        if (penezenka <= 0) {
            document.getElementById('result').innerHTML += '<br>Prázdna peněženka! Ztratili jste všechny peníze.';
        }
    }

    function restart() {
        penezenka = 1000;
        aktualizovatStavPeněženky();
        document.getElementById('restartButton').style.display = 'none';
        document.getElementById('vsazeno').value = '';
        document.getElementById('result').innerHTML = '';
    }

    aktualizovatStavPeněženky(); 