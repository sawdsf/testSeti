package by.delaidelo.tests.testworks.services;
import by.delaidelo.tests.testworks.dao.IncomingDocumentRepository;
import by.delaidelo.tests.testworks.domain.IncomingDocument;
import org.springframework.stereotype.Service;
import java.math.BigDecimal;
import java.util.List;

@Service
public class IncomingDocumentService {

    private final IncomingDocumentRepository repo;

    public IncomingDocumentService(IncomingDocumentRepository repo) {
        this.repo = repo;
    }

    public List<IncomingDocument> findAll() {
        return repo.findAll();
    }

    public IncomingDocument create(IncomingDocument doc) {
        if (doc.getRows() != null) {
            doc.getRows().forEach(r -> r.setTotal(r.getPrice().multiply(BigDecimal.valueOf(r.getQuantity()))));
        }
        return repo.save(doc);
    }

    public IncomingDocument post(Long id) {
        IncomingDocument doc = repo.findById(id).orElseThrow(() -> new RuntimeException("Document not found"));
        doc.setPosted(true);
        return repo.save(doc);
    }

    public IncomingDocument unpost(Long id) {
        IncomingDocument doc = repo.findById(id).orElseThrow(() -> new RuntimeException("Document not found"));
        doc.setPosted(false);
        return repo.save(doc);
    }
}