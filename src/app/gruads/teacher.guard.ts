import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const teacherGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  let isTeacherMayEnter = sessionStorage.getItem("isTeacherMayEnter");
  if (!isTeacherMayEnter || isTeacherMayEnter == "false") {
    router.navigate(['/login']);
    return false;
  }
  if (isTeacherMayEnter == "true")
    return true;
  return false;
};
