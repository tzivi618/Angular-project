import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const secretaryGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let isSecretaryMayEnter = sessionStorage.getItem("isSecretaryMayEnter");
  if (!isSecretaryMayEnter || isSecretaryMayEnter == "false") {
    router.navigate(['/login']); 
    alert("מצטערים, אין לך הרשאות");
    return false;
  }
  if (isSecretaryMayEnter == "true")
    return true;
  return false;
};
