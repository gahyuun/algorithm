function solution(phone_number) {
  phone_number = phone_number.split('');
  for (let i = 0; i < phone_number.length - 4; i++) {
    phone_number[i] = '*';
  }
  return phone_number.join('');
}
