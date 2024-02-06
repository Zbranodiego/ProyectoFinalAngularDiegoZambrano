import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import Swal, { SweetAlertOptions } from "sweetalert2";

@Injectable({ providedIn: "root" })
export class AlertsService {
    private notificacion$ = new Subject<SweetAlertOptions>()
    constructor() {
        this.notificacion$.subscribe({
            next: (options) => {
                Swal.fire(options);
            }
        })
    }
    showAlert(options: SweetAlertOptions): void {
        this.notificacion$.next(options);
    }

    showSuccess(title: string, message: string): void {
        this.notificacion$.next({
            icon: 'success',
            title,
            text: message
        })
    }
    showError(message?: string): void {
        this.notificacion$.next({
            icon: 'error',
            title: 'error',
            text: message
        })
    }
}