import { Injectable } from '@nestjs/common';
import { ShoppingCart } from './shopping-cart.model';
import { InjectModel } from '@nestjs/sequelize';
import { UsersService } from 'src/users/users.service';
import { BoilerPartsService } from 'src/boiler-parts/boiler-parts.service';

@Injectable()
export class ShoppingCartService {
  constructor(
    @InjectModel(ShoppingCart)
    private shoppingCardModel: typeof ShoppingCart,
    private readonly usersService: UsersService,
    private readonly boilerPartsService: BoilerPartsService,
  ) {}

  async findAll(userId: number | string): Promise<ShoppingCart[]> {
    return this.shoppingCardModel.findAll({ where: { userId } });
  }

  async add(addToCardDto) {
    const cart = new ShoppingCart();
    const user = await this.usersService.findOne({
      where: { username: addToCardDto.username },
    });

    const part = await this.boilerPartsService.findOne(addToCardDto.partId);

    cart.userId = user.id;
    cart.partId = part.id;
    cart.boiler_manufacturer = part.boiler_manufacturer;
    cart.parts_manufacturer = part.parts_manufacturer;
    cart.price = part.price;
    cart.in_stock = part.in_stock;
    cart.image = JSON.parse(part.images)[0];
    cart.name = part.name;
    cart.total_price = part.price;

    return cart.save();
  }

  async updateCount(
    count: number,
    partId: number | string,
  ): Promise<{ count: number }> {
    await this.shoppingCardModel.update({ count }, { where: { partId } }); //обновили count в элементе корзины
    const part = await this.shoppingCardModel.findOne({ where: { partId } });
    return { count: part.count };
  }

  async updateTotalPrice(
    total_price: number,
    partId: number | string,
  ): Promise<{ total_price: number }> {
    await this.shoppingCardModel.update({ total_price }, { where: { partId } }); //обновили count в элементе корзины
    const part = await this.shoppingCardModel.findOne({ where: { partId } });
    return { total_price: part.total_price };
  }

  async remove(partId: number | string): Promise<void> {
    const part = await this.shoppingCardModel.findOne({ where: { partId } });
    await part.destroy();
  }

  async removeAll(userId: number | string): Promise<void> {
    await this.shoppingCardModel.destroy({ where: { userId } });
  }
}
