export default function translatorStatusCielo(status) {
  console.log('STATUS', status)
  switch (status) {
  case 0:
    return 'Reprovado';
  case 2:
    return 'Aprovado';
    default:
      return status;
  }
}
