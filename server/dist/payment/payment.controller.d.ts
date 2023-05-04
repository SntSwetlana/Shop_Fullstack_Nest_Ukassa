import { MakePaymentDto } from './dto/make-payment.dto';
import { PaymentService } from './payment.service';
export declare class PaymentController {
    private paymentService;
    constructor(paymentService: PaymentService);
    makePayment(makePaymentDto: MakePaymentDto): Promise<any>;
}
