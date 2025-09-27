create table contragent (
    id bigserial primary key not null,
    name varchar(255) not null
);

insert into contragent (name) values
('ООО "Ромашка"'),
('ЗАО "Василек"'),
('ИП Иванов И.И.'),
('ЧТУП "Альфа"'),
('ООО "Бета"'),
('ИП Петров П.П.');