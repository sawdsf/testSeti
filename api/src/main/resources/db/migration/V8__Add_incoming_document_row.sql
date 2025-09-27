create table incoming_document_row (
    id bigserial primary key not null,
    document_id bigint not null references incoming_document(id) on delete cascade,
    tmc_id bigint not null references tmc(id),
    quantity integer not null,
    price numeric(15,2) not null,
    total numeric(15,2) not null
);

insert into incoming_document_row (document_id, tmc_id, quantity, price, total) values
(1, 1, 5, 1200.00, 6000.00), -- 5 ноутбуков
(1, 2, 3, 300.00, 900.00),   -- 3 монитора
(2, 3, 10, 25.00, 250.00),   -- 10 клавиатур
(2, 4, 8, 15.00, 120.00);    -- 8 мышей