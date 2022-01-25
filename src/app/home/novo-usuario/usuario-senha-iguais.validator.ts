import { FormGroup } from '@angular/forms';

export function usuarioSenhaIguaisValidator(formGroup: FormGroup) {
  //recupera as propriedades
  const username = formGroup.get('userName')?.value ?? '';
  const password = formGroup.get('password')?.value ?? '';

  if (username.trim() + password.trim()) {
    if (username !== password) {
      return null;
    } else {
      return {senhaIgualUsuario: true}
    }
  } else {
    return null;
  }
}
