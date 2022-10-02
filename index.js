let num="";
function onAdd(input){
                num+=input;
                document.getElementById('input').value = num;
            }
            function onClear(){
                num="";
                document.getElementById('input').value = num;
            }
            function onAnswer(){
                let result = eval(num);
                document.getElementById('input').value = result;
                num='';
            }