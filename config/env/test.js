module.exports = {
   // If you want to debug regression tests, you will need the following.
   // If using the Zap docker container, use the IP address that docker assigned to it.
   // To find this out:
   // docker ps # will provide the running containers details. Use the container Id in the followng command
   // docker inspect <container Id> | grep IPAddress # Use the outputted IP.
    zapHostName: "172.17.0.2",
    zapPort: "8080",
    // Required from Zap 2.4.1. This key is set in Zap Options -> API _Api Key.
    zapApiKey: "v9dn0balpqas1pcc281tn5ood1",
    zapApiFeedbackSpeed: 5000 // Milliseconds.
};
