create table incoming_document (
    id bigserial primary key not null,
    document_date date not null,
    document_number varchar(100) not null,
    posted boolean default false,
    contragent_id bigint references contragent(id),
    contract_id bigint references contracts(id),
    warehouse_id bigint references warehouses(id)
);

insert into incoming_document (document_date, document_number, posted, contragent_id, contract_id, warehouse_id) values
('2025-09-17', 'ПН-001', true, 1, 1, 1),
('2025-09-22', 'ПН-002', false, 2, 2, 2);