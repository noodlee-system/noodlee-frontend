import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
import { map } from 'rxjs/operators';
import { IRegisterRequestObject } from 'src/app/models';
import { UserAvatarModel } from '../modules/main/models';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    private _baseUrl: string;

    constructor(private http: HttpClient) {
        this._baseUrl = environment.apiUrl;
    }

    registerUser(registerRequestObject: IRegisterRequestObject): Observable<any> {
        const registerUrl = `${this._baseUrl}/authentication/register`;

        return this.http.post(registerUrl, registerRequestObject);
    }

    getCurrentUser(): Observable<any> {
        const userId = 0;
        return this.http.get(`${environment.apiUrl}/users/${userId}`);
    }

    getUserAvatarData(): Observable<UserAvatarModel> {
        return this.getCurrentUser()
            .pipe(map((user) => {
                return {
                    firstname: user.firstname,
                    lastname: user.lastname,
                    avatar: this.getUserDefaultAvatar('Jan', 'Kowalski')
                };
            }));
    }

    getUserDefaultAvatar(firstName: string, lastName: string): string {
        const rootPath = 'https://ui-avatars.com/api';
        const name = `${firstName}+${lastName}`;
        const backgroundColor = 'ADADAD';
        const fontColor = 'fff';
        const avatarSize = '300';

        return `${rootPath}/?name=${name}&background=${backgroundColor}&color=${fontColor}&size=${avatarSize}`;
    }

    getLoggedUserImage(): string {
        return 'data:image/jpeg;base64,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'
    }
}
