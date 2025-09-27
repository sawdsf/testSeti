package by.delaidelo.tests.testworks.domain;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
import java.util.List;

@Entity
@Getter
@Setter
public class IncomingDocument {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private LocalDate documentDate;
    private String documentNumber;
    private boolean posted;

    @ManyToOne
    private Contragent contragent;

    @ManyToOne
    private Contract contract;

    @ManyToOne
    private Warehouse warehouse;

    @OneToMany(mappedBy = "document", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<IncomingDocumentRow> rows;

}