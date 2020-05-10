var alertId = 0;

function redirect(path){
    window.location.replace(path);
}

function toClipboard(inputObject){
    text = inputObject.innerText;
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    spawnAlert('Copiado para a área de transferência', 10);
}

function spawnAlert(text, timeToDestroy=0){
    var new_alert = document.createElement('span');
    var id = 'number_' + alertId;
    console.log(alertId);
    alertId++;
    console.log(alertId);
    new_alert.innerHTML = text + '<i class="fas fa-times"></i>';
    new_alert.className = 'alert';
    new_alert.id = id
    document.body.appendChild(new_alert);
    var lastElement = document.getElementById(id);
    const closeButton = lastElement.children[0];
    closeButton.addEventListener('click', function (){
        destroyElement(lastElement);
    })
    if (timeToDestroy >= 1){
        setTimeout(function(){
            destroyElement(lastElement);
        }, timeToDestroy * 1000)
    }
}

function destroyElement(el){
    const parent = el.parentNode;
    parent.removeChild(el);
}

function translate(){
    // TODO save language on browser cache
    var lang = 'pt-br';
    var attribute = 'data-lang';
    var request = new XMLHttpRequest();
        try {
            request.open("GET", `lang/${lang}.json`, true);
            request.onreadystatechange = function ()
            {
                // operation done
                if(request.readyState === 4)
                {   
                    // operation success
                    if(request.status === 200 || request.status == 0)
                    {
                        console.log(request);
                        var langTranslations = JSON.parse(request.responseText);
                        var allDom = document.getElementsByTagName('*');
                        for(var i =0; i < allDom.length; i++){
                            var elem = allDom[i];
                            var key = elem.getAttribute(attribute);

                            if(key != null) {
                                 elem.innerHTML = langTranslations[key]  ;
                            }
                        }
                    
                    }
                }
            }
            request.send();
        } catch (error) {
                console.log('It\'s not possible to translate the site' + error);
        }
}

window.addEventListener('load', function () {
    translate();
  });