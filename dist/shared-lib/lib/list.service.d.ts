import { Observable } from 'rxjs';
export declare class ListService {
    private message$;
    setMessage(message: any): void;
    getMessage(): Observable<any>;
}
