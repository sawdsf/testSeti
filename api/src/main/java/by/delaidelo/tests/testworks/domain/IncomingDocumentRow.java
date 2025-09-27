package by.delaidelo.tests.testworks.domain;
import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.math.BigDecimal;
@Entity
@Getter
@Setter
public class IncomingDocumentRow {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "document_id")
    private IncomingDocument document;

    @ManyToOne
    @JoinColumn(name = "tmc_id")
    private TMC tmc;

    private Integer quantity;
    private BigDecimal price;
    private BigDecimal total;

   
}