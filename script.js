const form = document.getElementById('carbonFootprintForm');
const result = document.getElementById('result');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const streamingHours = parseFloat(document.getElementById('streamingHours').value) || 0;
    const emailsSent = parseInt(document.getElementById('emailsSent').value) || 0;
    const facebookHours = parseFloat(document.getElementById('facebookHours').value) || 0;
    const instagramHours = parseFloat(document.getElementById('instagramHours').value) || 0;
    const tiktokHours = parseFloat(document.getElementById('tiktokHours').value) || 0;
    const cloudStorage = parseFloat(document.getElementById('cloudStorage').value) || 0;

    const carbonFootprint = calculateCarbonFootprint(
        streamingHours, emailsSent, facebookHours, instagramHours, tiktokHours, cloudStorage
    );
    result.textContent = `Sua pegada de carbono digital média é de ${carbonFootprint.toFixed(3)} kg CO2 por dia!`;
});

function calculateCarbonFootprint(streamingHours, emailsSent, facebookHours, instagramHours, tiktokHours, cloudStorage) {
    const streamingImpact = streamingHours * 36 / 1000;
    const emailImpact = emailsSent * 4 / 1000;
    const facebookImpact = facebookHours * 47.4 / 1000;
    const instagramImpact = instagramHours * 90 / 1000;
    const tiktokImpact = tiktokHours * 157.8 / 1000;
    const cloudStorageImpact = cloudStorage * 0.5 / 365;

    return streamingImpact + emailImpact + facebookImpact + instagramImpact + tiktokImpact + cloudStorageImpact;
}