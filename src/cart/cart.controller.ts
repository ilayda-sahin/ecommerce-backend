import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ApiBearerAuth, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';
import { AddToCartDto } from './dto/add-to-cart.dto';
import { UpdateCartItemDto } from './dto/update-cart-item.dto';
import { CartService } from './cart.service';

@ApiTags('Cart')
@ApiBearerAuth()
@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  @ApiOperation({ summary: 'Get cart' })
  getCart() {
    return this.cartService.getCart();
  }

  @Post('items')
  @ApiOperation({ summary: 'Add product to cart' })
  addToCart(@Body() dto: AddToCartDto) {
    return this.cartService.addToCart(dto.productId, dto.quantity);
  }

  @Patch('items/:productId')
  @ApiOperation({ summary: 'Update cart item quantity' })
  @ApiParam({ name: 'productId', example: 'product-uuid-here' })
  updateCartItem(
    @Param('productId') productId: string,
    @Body() dto: UpdateCartItemDto,
  ) {
    return this.cartService.updateCartItem(productId, dto.quantity);
  }

  @Delete('items/:productId')
  @ApiOperation({ summary: 'Remove product from cart' })
  @ApiParam({ name: 'productId', example: 'product-uuid-here' })
  removeFromCart(@Param('productId') productId: string) {
    return this.cartService.removeFromCart(productId);
  }
}