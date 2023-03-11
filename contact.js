const ACTION_URL =
  'https://docs.google.com/forms/d/e/1FAIpQLSekiIafJ17Yi5UJGsIChO9-VJyV7dlKry1PzuZ8n6MFdf1CDA/formResponse';
const NAME_ID = 'entry.2005620554';
const EMAIL_ID = 'entry.1045781291';
const PHONE_ID = 'entry.1065046570';
const HEAR_ID = 'entry.1166974658';
const MESSAGE_ID = 'entry.839337160';
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

function submitForm(event) {
  event.preventDefault();
  const clientFormData = new FormData(event.target);
  const clientFormProps = Object.fromEntries(clientFormData);
  console.log(clientFormProps);

  const formData = new FormData();
  formData.append(NAME_ID, clientFormProps.name);
  formData.append(EMAIL_ID, clientFormProps.email);
  formData.append(PHONE_ID, clientFormProps.phone);
  formData.append(HEAR_ID, clientFormProps.hear);
  formData.append(MESSAGE_ID, clientFormProps.message);

  fetch(CORS_PROXY + ACTION_URL, {
    method: 'post',
    body: formData,
  });
}

const form = document.getElementById('form');
form.addEventListener('submit', submitForm);
