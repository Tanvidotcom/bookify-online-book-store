package com.store.BookStore.controller;

import com.store.BookStore.entity.Order;
import com.store.BookStore.entity.OrderItem;
import com.store.BookStore.service.OrderService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/orders")
@CrossOrigin(origins = "http://localhost:5173")
public class OrderController {

    private final OrderService orderService;

    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @PostMapping
    public ResponseEntity<?> createOrder(
            @RequestBody OrderRequest request
    ) {

        try {

            Order savedOrder =
                    orderService.createOrder(
                            request.getOrder(),
                            request.getItems()
                    );

            return ResponseEntity.ok(
                    Map.of(
                            "message",
                            "Order placed successfully",
                            "order",
                            savedOrder
                    )
            );

        } catch (Exception e) {

            return ResponseEntity.badRequest().body(
                    Map.of(
                            "message",
                            "Unable to place order",
                            "error",
                            e.getMessage()
                    )
            );
        }
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{orderId}/items")
    public List<OrderItem> getOrderItems(
            @PathVariable Long orderId
    ) {
        return orderService.getOrderItems(orderId);
    }


    public static class OrderRequest {

        private Order order;
        private List<OrderItem> items;

        public OrderRequest() {
        }

        public Order getOrder() {
            return order;
        }

        public void setOrder(Order order) {
            this.order = order;
        }

        public List<OrderItem> getItems() {
            return items;
        }

        public void setItems(List<OrderItem> items) {
            this.items = items;
        }
    }
}